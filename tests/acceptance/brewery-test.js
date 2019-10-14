import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | brewery', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /breweries/:id', async function(assert) {
    this.server.createList('brewery', 1);
    await visit('/breweries/1');
    assert.dom(['data-test-brewery-title']).exists()
    assert.dom(['data-test-link-brewery-details']).exists()
    assert.dom(['data-test-link-brewery-beers']).exists()
    assert.equal(currentURL(), '/breweries/1');
  });
  test('details show brewery details and location', async function(assert){})
  test('beers show brewery beers', async function(assert){})
  test('adding beers to brewery', async function(assert){})
  test('ranking beers', async function(assert){})

});
