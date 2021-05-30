/*
Solution of assignment 4:
Expected output:
Hello Yaaini
Good Bye John
Good Bye Jim
Good Bye Jason
Hello Pratik
Hello Cisco
Hello Linda
Hello Paul
Hello Riya
Good Bye Jatin
*/

(function() {
    var names = ["Yaaini", "John", "Jim", "Jason", "Pratik", "Cisco", "Linda", "Paul", "Riya", "Jatin"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();