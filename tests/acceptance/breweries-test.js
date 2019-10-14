import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | breweries', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test('visiting /breweries', async function(assert) {
    this.server.create('brewery', { title: 'Zilker' });
    this.server.create('brewery', { title: 'Celis' });
    await visit('/breweries');
    assert.equal(currentURL(), '/breweries');
    assert.dom(['data-test-brewery-title']).exists({count: 2})
  });
  test('add brewery', async function(assert){})
  test('cancel form', async function(assert){})
  test('clicking on a brewery routes to show', async function(assert){})
  
});