import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | brewery/beers', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:brewery/beers');
    assert.ok(controller);
  });
});
