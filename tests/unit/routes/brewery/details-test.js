import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | brewery/details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:brewery/details');
    assert.ok(route);
  });
});
