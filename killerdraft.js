(function () {
  var K = ["Trapper", "Wraith", "Hillbilly", "Nurse", "Hag", "Doctor", "Huntress", "Cannibal", "Nightmare", "Pig", "Clown", "Spirit", "Legion", "Plague", "Ghost Face", "Demogorgon", "Oni", "Deathslinger", "Executioner", "Blight", "Twins", "Trickster", "Nemesis", "Artist", "Onryō", "Dredge", "Mastermind", "Knight", "Skull Merchant", "Singularity", "Xenomorph", "Good Guy", "Unknown", "Lich", "Dark Lord", "Houndmaster", "Ghoul", "Animatronic", "Krasue", "First", "Slasher", "Judgment"];
  var P = ["Bitter Murmur", "Cull the Weak", "Deerstalker", "Distressing", "Hex: Fortune's Fool", "Hex: No One Escapes Death", "Hex: Thrill of the Hunt", "Insidious", "Iron Grasp", "Keep Them Waiting", "No Holds Barred", "Scourge Hook: Monstrous Shrine", "Scourge Hook: Weeping Wounds", "See How They Run", "Shattered Hope", "Sloppy Butcher", "Spies from the Shadows", "Unrelenting", "Whispers"];
  function pick(a, n) {
    a = a.slice();
    for (var i = 0; i < n; i++) {
      var j = i + Math.floor(Math.random() * (a.length - i));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a.slice(0, n);
  }
  var k = pick(K, 4).map(function (x) { return "The " + x; });
  var p = pick(P, 4);
  return "Main: " + k[0] + " | Kits: " + k.slice(1).join(", ") + " | General: " + p.join(", ");
})()
