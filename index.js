//Your Code here
let firstAnswer = window.prompt("Do you head left or right");
//left
if (firstAnswer.toLowerCase() === "left") {
  let secondAnswer = window.prompt(
    "You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path? continue or follow?"
  );

  //left -> continue
  if (secondAnswer.toLowerCase() === "continue") {
    let thirdAnswer = window.prompt(
      "You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take? ladder or staircase?"
    );

    //left -> continue -> ladder
    if (thirdAnswer.toLowerCase() === "ladder") {
      window.alert(
        "After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home."
      );
    }
    //left -> continue -> staircase
    else if (thirdAnswer.toLowerCase() === "staircase") {
      window.alert(
        "After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever."
      );
    }
    //this is to alert the user that he/she made a mistake in typing.
    else if (thirdAnswer.toLowerCase() != "ladder" || "staircase") {
      window.alert(
        "Start all over and type the exact letters. Please refresh page."
      );
    }
  }
  //left -> follow
  else if (secondAnswer.toLowerCase() === "follow") {
    let thirdAnswer = window.prompt(
      "You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. stay or alert?"
    );

    //left -> follow -> stay
    if (thirdAnswer.toLowerCase() === "stay") {
      window.alert(
        "You live happily amongst the cats for the rest of your days."
      );
    }

    //left -> follow -> alert
    else if (thirdAnswer.toLowerCase() === "alert") {
      window.alert(
        "After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless."
      );
    }
    //this is to alert the user that he/she made a mistake in typing.
    else if (thirdAnswer.toLowerCase() != "stay" || "alert") {
      window.alert(
        "Start all over and type the exact letters. Please refresh page."
      );
    }
  }
  //this is to alert the user that he/she made a mistake in typing.
  else if (secondAnswer.toLowerCase() != "continue" || "follow") {
    window.alert(
      "Start all over and type the exact letters. Please refresh page."
    );
  }
}

//right
else if (firstAnswer.toLowerCase() === "right") {
  let secondAnswer = window.prompt(
    "You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take? past or away"
  );

  //right -> past
  if (secondAnswer.toLowerCase() === "past") {
    let thirdAnswer = window.prompt(
      "The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:"
    );

    //right -> past -> stay
    if (thirdAnswer.toLowerCase() === "stay") {
      window.alert(
        "You and the dragon have an uplifting conversation about local politics and become lifelong friends."
      );
    }
    //right -> past -> run
    else if (thirdAnswer.toLowerCase() === "run") {
      window.alert(
        "Quickly, you run back to the cave's entrance. Sheepish, you return home."
      );
    }
    //this is to alert the user that he/she made a mistake in typing.
    else if (thirdAnswer.toLowerCase() != "stay" || "run") {
      window.alert(
        "Start all over and type the exact letters. Please refresh page."
      );
    }
  }

  //right -> away
  else if (secondAnswer.toLowerCase() === "away") {
    let thirdAnswer = window.prompt(
      "After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do? draw or pick?"
    );

    //right -> away -> draw
    if (thirdAnswer.toLowerCase() === "draw") {
      window.alert(
        "You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch."
      );
    }
    //right -> away -> pick
    else if (thirdAnswer.toLowerCase() === "pick") {
      window.alert(
        "You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust."
      );
    }
    //this is to alert the user that he/she made a mistake in typing.
    else if (secondAnswer.toLowerCase() != "draw" || "pick") {
      window.alert(
        "Start all over and type the exact letters. Please refresh page."
      );
    }
  }
  //this is to alert the user that he/she made a mistake in typing.
  else if (secondAnswer.toLowerCase() != "past" || "away") {
    window.alert(
      "Start all over and type the exact letters. Please refresh page."
    );
  }
}

//this is to alert the user that he/she made a mistake in typing.
else if (firstAnswer.toLowerCase() != "right" || "left") {
  window.alert(
    "Start all over and type the exact letters. Please refresh page."
  );
}
