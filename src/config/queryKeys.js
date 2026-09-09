// src/lib/queryKeys.js

// invalidateQueries({ queryKey: queryKeys.links.all })
// invalidates every list, detail, and stats query at once,
// because they all start with ['links'].
// Narrower keys is more surgical: queryKeys.links.detail(id)
export const queryKeys = {
  profile: {
    all: ["profile"],
    overview: (userId) => ["profile", "overview", userId],
  },

  subscription: {
    all: ["subscription"],
    active: (userId) => ["subscription", "active", userId],
  },

  plans: {
    all: ["plans"],
    list: () => ["plans", "list"],
  },

  links: {
    all: ["links"],
    lists: () => ["links", "list"],
    list: (userId, filters) => ["links", "list", userId, filters ?? {}],
    detail: (linkId) => ["links", "detail", linkId],
    stats: (linkId, range) => ["links", "stats", linkId, range ?? "30d"],
  },

  usage: {
    all: ["usage"],
    current: (userId) => ["usage", "current", userId],
  },
};
