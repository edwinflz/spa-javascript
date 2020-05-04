const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let valid = route === '/' ? route : '/:id';
        return valid;
    }

    return `/${route}`;
};

export default resolveRoutes;