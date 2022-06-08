import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Plaza_Cruz.JPG",
    address: "Some address 10, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Plaza_Cruz.JPG",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
