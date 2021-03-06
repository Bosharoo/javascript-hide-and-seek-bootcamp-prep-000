function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n)
{
  let lis = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < lis.length; i++)
  {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild()
{
  let div = document.querySelector('#grand-node');
  var nextDiv = div;
  while (nextDiv !== null)
  {
    nextDiv = nextDiv.querySelector('div');
    if (nextDiv !== null)
    {
      div = nextDiv;
    }
  }
  return div;
}