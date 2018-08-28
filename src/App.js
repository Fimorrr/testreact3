import React from 'react';
import { Switch, Route } from 'react-router';
import * as screens from 'screens';

const App = () => (
	<div>
    <Switch>
      <Route exact path="/" component={screens.HomeScreen} />
      <Route path="/login" component={screens.LoginScreen} />
      <Route path="/menu" component={screens.MainMenu} />
      <Route path="/action" component={screens.ActionList} />
    </Switch>
	</div>
);

export default App;
