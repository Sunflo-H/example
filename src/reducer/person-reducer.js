export default function personReducer(person, action) {
  switch (action.type) {
    case "updated":
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === action.prev)
            return { ...mentor, name: action.current };
          return mentor;
        }),
      };
    case "added": {
      const { name, title, id } = action;

      return {
        ...person,
        mentors: [...person.mentors, { name, title, id }],
      };
    }

    case "deleted": {
      const { name } = action;
      console.log(person.mentors.filter((mentor) => mentor.name !== name));
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      };
    }

    default:
      throw new Error("잘못된 액션을 입력했다.");
  }
}
