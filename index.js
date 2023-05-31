document.title = 'First website on DOM API'
console.log(document.title)

const mainDiv = document.createElement('div');
const textDiv =  document.createElement('div');
const linkDiv = document.createElement('div');
const text = document.createElement('p');
const linkIntocode = document.createElement('a');
const linkGoogle = document.createElement('a');
const linkYoutube = document.createElement('a');

linkIntocode.href = 'https://intocode.ru/';
linkGoogle.href = 'https://www.google.ru/';
linkYoutube.href = 'https://www.youtube.com/';
linkIntocode.target = 'target'
linkGoogle.target = 'target'
linkYoutube.target = 'target'

text.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet inventore maiores, iusto commodi suscipit .';
linkIntocode.textContent = 'intocode';
linkGoogle.textContent = 'google';
linkYoutube.textContent = 'youtube';

textDiv.append(text);
linkDiv.append(linkIntocode,linkGoogle,linkYoutube); 
mainDiv.append(textDiv, linkDiv);

mainDiv.style.width = '25%'
mainDiv.style.margin = 'auto'
linkDiv.style.margin = 'auto'
linkDiv.style.width = '95%'
linkDiv.style.display = 'flex'
linkDiv.style.justifyContent = 'space-between'
textDiv.style.border = ' 1px solid red'
textDiv.style.boxSizing = 'border-box'
textDiv.style.marginBottom = '10px'
textDiv.style.borderRadius = '15px'
text.style.fontSize = '17px'
text.style.fontWeight = '500'
text.style.paddingLeft = '8px'
text.style.lineHeight = '18px'


document.body.prepend(mainDiv);