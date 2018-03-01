
// eliminates space between bottom blocks 
function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if
    (
      child.nodeType === 8 
      || 
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    )
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}
clean(document.body);

// toggling of dropdown menu 

let button = document.querySelector(".Dropdown__button")
let dropdown = document.querySelector(".Dropdown__content");

button.addEventListener("click", () => {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block"
    } else {
        dropdown.style.display = "none"
    }
});