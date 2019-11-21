import consumer from './consumer';

document.addEventListener('turbolinks:load', function() {
  const guide = document.querySelector('#guide-show');

  if (guide) {
    var guideId = guide.dataset.guideId;
    console.log('guide id outside', guideId);

    consumer.subscriptions.create(
      {channel: 'LiveUpdatesChannel', id: guideId},
      {
        connected() {
          console.log('Connected');
        },

        received(data) {
          console.log('Received update', data);
        },
      },
    );
  }
});
