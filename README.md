# CSESoc Courses

> pls make new graphic uwu
>
> - Shrey 2022

Credits to Waleed for the design.

## About

Interactive course selector for the CSESoc Discord. Based on the graphic in the CSESoc #course-chats discord channel by Waleed.
![csesoc graphic](/public/Untitled-1.png)

## Built With

- React
- Next.js
- Tailwind CSS
- TypeScript

## Getting Started

1. `git clone https://github.com/ZhouZ-1/csesoc-courses.git`
2. `cd csesoc-courses`
3. `npm install`
4. `npm run dev`

## Roadmap

- [x] Add all courses
- [x] Responsive design
- [x] Copy course command to clipboard on click
- [x] Add credits
- [x] Popup alert with link to channel when course is selected
- [ ] Convince CSESoc Discord Bot team to add support for the onMessageCreate event for messages starting with `\role give`
- [ ] Display course name when hovering over a course
- [ ] Toggle join and leave command to be copied
- [ ] Search bar to filter courses by keyword. Courses are greyed out on larger screens and removed on smaller screens.
- [ ] Filter courses by term. Courses are greyed out on larger screens and removed on smaller screens. Defaults to the current term as the initial state.
- [ ] Settings modal with the following options: toggle between remove and grey out, toggle between default join and leave command, toggle between current term and all terms, toggle theme.
- [ ] Instructions and images on how to add and remove courses in the discord channel.

## Known issues

- On mobile, the slash commands do not work when the channel has been opened recently. A potential fix would be for the CSESoc Discord Bot team to implement adding roles by monitoring the chat for a regex pattern that triggers the role add process, like how it was with the previous bot.

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## Contact

You can contact me at `pika pika#0007` in the CSESoc Discord server.

## Acknowledgements

- CSESoc
- Shrey
- Waleed
- Create T3 App
