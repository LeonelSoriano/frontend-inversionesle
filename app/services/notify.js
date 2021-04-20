import Service from '@ember/service';

export default class NotifyService extends Service {
  info(message) {
    // eslint-disable-next-line no-undef
    const notyf = new Notyf({
      position: {
        x: 'right',
        y: 'bottom',
      },
      types: [
        {
          type: 'info',
          background: '#262B40',
          icon: {
            className: 'fas fa-info-circle',
            tagName: 'span',
            color: '#fff',
          },
          dismissible: false,
        },
      ],
    });
    notyf.open({
      type: 'info',
      message,
    });
  }

  error(message) {
    // eslint-disable-next-line no-undef
    const notyf = new Notyf({
      position: {
        x: 'right',
        y: 'top',
      },
      types: [
        {
          type: 'error',
          background: '#FA5252',
          icon: {
            className: 'fas fa-times',
            tagName: 'span',
            color: '#fff',
          },
          dismissible: false,
        },
      ],
    });
    notyf.open({
      type: 'error',
      message,
    });
  }

  warning(message) {
    // eslint-disable-next-line no-undef
    const notyf = new Notyf({
      position: {
        x: 'left',
        y: 'bottom',
      },
      types: [
        {
          type: 'warning',
          background: '#F5B759',
          icon: {
            className: 'fas fa-exclamation-triangle',
            tagName: 'span',
            color: '#fff',
          },
          dismissible: false,
        },
      ],
    });
    notyf.open({
      type: 'warning',
      message,
    });
  }
}
