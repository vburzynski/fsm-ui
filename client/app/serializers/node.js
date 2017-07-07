import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  serialize() {
    let json = this._super(...arguments);

    json.data.attributes.position = [
      json.data.attributes.position.x,
      json.data.attributes.position.y
    ];

    delete json.data.attributes.position.x;
    delete json.data.attributes.position.y;

    return json;
  },
});
