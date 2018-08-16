export const isAuthenticated = user => !!user;

export const isAllowed = (user, rights) => rights.some(right => user.rights.includes(right));

export const user = {
  roles: ['user'],
  rights: ['can_view_articles']
};