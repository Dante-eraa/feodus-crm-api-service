export const paginate = async (
  model,
  options = {},
  validFields = [],
  value = "Data",
  safeSelect = null
) => {
  const {
    page = 1,
    limit = 10,
    filters = {},
    order = [["createdAt", "desc"]],
    include = {},
  } = options;

  const skip = (page - 1) * limit;

  // Build safe 'where' object using only valid fields
  const where = {};
  Object.entries(filters).forEach(([key, val]) => {
    if (!validFields.includes(key)) return; // skip invalid fields
    if (val === undefined || val === null || val === "") return;

    if (typeof val === "string") {
      where[key] = { contains: val, mode: "insensitive" };
    } else if (typeof val === "number" || typeof val === "boolean") {
      where[key] = { equals: val };
    } else if (typeof val === "object") {
      where[key] = val;
    }
  });

  // Build safe 'orderBy' array
  const orderBy = order
    .filter(([field]) => field && validFields.includes(field)) // only valid fields
    .map(([field, direction]) => ({ [field]: direction.toLowerCase() }));

  const includeSafe = Object.keys(include).length ? include : undefined;

  try {
    const [data, total] = await Promise.all([
      model.findMany({
        skip,
        take: limit,
        where: Object.keys(where).length ? where : undefined,
        orderBy: orderBy.length ? orderBy : undefined,
        include: includeSafe,
        select: safeSelect || undefined,
      }),
      model.count({
        where: Object.keys(where).length ? where : undefined,
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
        order,
        appliedFilters: filters,
      },
    };
  } catch (err) {
    const message = err.message;
    const errors = err.errors;
    return {
      success: false,
      message,
      errors,
      entry: null,
    };
  }
};
