const instructorWithLongestName = instructors => {
    let longestName = instructors[0];
    for (index = 1; index < instructors.length; index ++) {
      if (instructors[index]['name'].length > longestName['name'].length) {
        longestName = instructors[index];
      }
    }
    return longestName;
  }