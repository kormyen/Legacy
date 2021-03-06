function Main()
{
  this.db = null;
  this.view = null;

  this.install = function()
  {
    this.db = new Wrap(DATABASE);
    this.db.install();
    this.view = new View();
    this.view.install();
  }

  this.start = function()
  {
    if(window.document.location.hash === "")
      window.document.location.hash = "#home"
    
    this.load(window.document.location.hash);
  }

  this.load = function(target)
  {
    this.view.reset();
    target = target.substr(0,1) == "#" ? target.substr(1,target.length-1) : target;
    target = target.replace(/\+/g, " ").trim().toUpperCase();

    this.db.getTemplate(target);
    document.title = `Legacy: ${target.toProperCase()}`;
  }
}

window.addEventListener("hashchange", function() { main.load(window.document.location.hash); });