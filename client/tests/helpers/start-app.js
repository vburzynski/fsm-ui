import Ember from 'ember';
import Application from '../../app'; // eslint-disable-line
import config from '../../config/environment';

export default function startApp(attrs) {
  let attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  return Ember.run(() => {
    const application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}
