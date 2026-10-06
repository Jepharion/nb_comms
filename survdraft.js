(function () {
  var S = ["Dwight Fairfield", "Meg Thomas", "Claudette Morel", "Jake Park", "Nea Karlsson", "Ace Visconti", "Bill Overbeck", "Feng Min", "David King", "Quentin Smith", "David Tapp", "Kate Denson", "Adam Francis", "Jeff Johansen", "Jane Romero", "Ash Williams", "Nancy Wheeler", "Steve Harrington", "Yui Kimura", "Zarina Kassir", "Cheryl Mason", "Felix Richter", "Élodie Rakoto", "Lee Yun-jin", "Jill Valentine", "Leon Scott Kennedy", "Mikaela Reid", "Jonah Vasquez", "Yoichi Asakawa", "Haddie Kaur", "Ada Wong", "Rebecca Chambers", "Vittorio Toscano", "Thalita Lyra", "Renato Lyra", "Gabriel Soma", "Nicolas Cage", "Ellen Ripley", "Alan Wake", "Sable Ward", "The Troupe", "Lara Croft", "Trevor Belmont", "Taurie Cain", "Orela Rose", "Rick Grimes", "Michonne Grimes", "Vee Boonyasak", "Dustin Henderson", "Eleven", "Kwon Tae-young", "Shane Wiigwaas", "Aurora Stardotter"];
  var P = ["Bound by Obsession", "Dark Sense", "Déjà Vu", "Down to the Last", "Hope", "Kindred", "Lightweight", "No One Left Behind", "Plunderer's Instinct", "Premonition", "Resilience", "Slippery Meat", "Small Game", "Spine Chill", "This Is Not Happening", "We'll Make It", "Will to Live"];
  function pick(a, n) {
    a = a.slice();
    for (var i = 0; i < n; i++) {
      var j = i + Math.floor(Math.random() * (a.length - i));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a.slice(0, n);
  }
  var s = pick(S, 3);
  var p = pick(P, 4);
  return "Kits: " + s.join(", ") + " | General: " + p.join(", ");
})()
