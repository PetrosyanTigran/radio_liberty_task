(function main() {
  const BASE_CASE = '#tags=red,blue,purple';
  const EMPTY_TEMPLATE = '#tags=nothing';
  const TAG_BASE = '#tags=';

  window.location.href = BASE_CASE;
  const currentHash = window.location.hash || EMPTY_TEMPLATE;

  addItemListener();

  window.onload = () => addItems(currentHash);

  window.onhashchange = ({ newURL }) => {
    const items = newURL.split(TAG_BASE);
    addItems(items[1]);
  };

  function addItems(_currentHash) {
    const list = document.getElementById('list');

    const tags = _currentHash.replace(TAG_BASE, '');
    const tagList = tags.split(',');

    applyStyles(tagList);

    list.innerHTML = '';

    for (let i = 0; i < tagList.length; i++) {
      const listItem = document.createElement('li');
      listItem.className = tagList[i];

      removeItemListener(listItem);

      const textNode = document.createTextNode(tagList[i]);
      listItem.appendChild(textNode);
      if (listItem.innerHTML === '') {
        listItem.classList.add('removed');
      }
      list.appendChild(listItem);
    }
  }

  function addItemListener() {
    const submit = document.getElementById('submit');
    const input = document.getElementById('input');

    submit.addEventListener('click', function (e) {
      e.preventDefault();
      const color = input?.value.trim().toLowerCase();
      if (color === '') {
        alert('Cannot accept an empty string, please enter a value.');
      } else {
        window.location.hash.endsWith(',')
          ? (window.location.hash = `${window.location.hash}${color}`)
          : (window.location.hash = `${window.location.hash},${color}`);
      }
      input.value = '';
    });
  }

  function removeItemListener(li) {
    li.addEventListener('click', function () {
      window.location.hash = `${TAG_BASE}${window.location.hash
        .replace(TAG_BASE, '')
        .split(',')
        .filter((el) => el !== li.innerHTML)
        .join(',')}`;
    });
  }

  function applyStyles(listOfTags) {
    function isCssColor(strColor) {
      const s = new Option().style;
      s.color = strColor;
      return s.color == strColor;
    }

    const template = (color) => `li.${color}:hover {
                background-color: ${isCssColor(color) ? color : '#0073CF'};
                color: white;
                cursor: pointer;
            }`;

    const newStyles = listOfTags.reduce(
      (acc, el) => {
        return acc + '\n' + template(el);
      },
      `li{
                transition: all ease 0.3ms;
            }`
    );

    const ifOld = document.querySelector('style');

    if (ifOld) {
      ifOld.innerHTML = newStyles;
    } else {
      const styleTag = document.createElement('style');
      styleTag.innerHTML = newStyles;
      document.head.appendChild(styleTag);
    }
  }
})();
