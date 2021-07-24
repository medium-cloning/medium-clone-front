import paths from 'common/paths';
import React, { LazyExoticComponent, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const AppRouter = (): React.ReactElement => {
    return (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            {paths.flatPaths.map((path) => {
                const Component = path.component as LazyExoticComponent<any>;
                return (
                    <Route
                        exact
                        key={path.key}
                        path={path.key}
                        component={(props: any) => (
                            <Component {...props} />
                        )}
                    />
                )
            })}
        </Switch>
    </Suspense>
    )
};

export default AppRouter;