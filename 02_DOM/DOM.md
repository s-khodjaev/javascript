# DOM

A big part of working with JavaScript on a web browser is interacting with elements on the page. When you write HTML, the web browser turns it into something called DOM (Document Object Model). That's what you see on the **_elements_** panel of any web browser when you inspect a website.

#### What is a DOM Element?

A DOM Element is an object that represents an element in an HTML document. It provides properties and methods to manipulate the content, structure and style of the element.

---

## Selecting elements from the DOM

**1. querySelector() or querySelectorAll():** The document method _querySelector()_ and _querySelectorAll()_ return the first element within the document that matches the specified CSS selector or a group of CSS selectors. if no matches are found, _null_ is returned.

```JavaScript
  const p = document.querySelector('p');
```

**2. getElementById()** method allows us to select element by its ID. **#** sign for ID is not necesssary.

```JavaScript
  const myID = document.getElementById('myID');
```

**3. getElementsByClassName()** method allows us to select elements by their class name. It returns a collection of elements in the document with the specified class name.

```JavaScript
  const myClass = document.getElementsByClassName('myClass');
```

**4. getElementByTagName()** method allows us to select elements by their tag name. It returns a collection of elements in the document with the specified tag name.

```JavaScript
  const element = document.getElementByTagName('p');
```

## DOM Element Properties and Methods

Difference between **.textContent** and **.innerText** - **.textContent** gets the content of all the elements, including _script_ and _style_ elements. In contrast, **.innerText** only shows "human-readable" elements.
