import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | beers', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /beers', async function(assert) {
    await visit('/beers');
    assert.equal(currentURL(), '/beers');
  });
  test('beers index is correct', async function(assert){})
  test('search function is sensible', async function(assert){})

});
