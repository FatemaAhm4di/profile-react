import "./App.css";
import ProfilePage from "./components/ProfilePage";
import avatarImage from "./assets/avatar.jfif";

export default function App() {
  const user = {
    name: "Fatema Ahmadi",
    username: "@fatema_ahmadi",
    avatarImage: avatarImage, // if you are using image later, we can replace this with avatarUrl
    xp: 65,
    lastActive: "Jan 2, 2025",
    streakDays: 4,
    longestStreak: 3,
    recentBadgesText: "No badges earned yet.",
  
    personalInfo: {
      Email: "fatema.ahmadi1384@gmail.com",
      Gender: "FeMale",
      Country: "Afghanistan",
      "Province or State ": "Herat",
      "Teaching Experience (in years)": "4",
      "Date Of Birth": "7/13/05",
      "Online Portfolio Link": "Open the Link",
      "LinkedIn Link": "Open the Link",
      Languages: "farsi, english, pashto",
      Bio: "Modrator at MegaByte Services.",
    },
  
    accountDetails: {
      Role: "Moderator",
      Status: "Active",
      Verification: "Verified",
    },
  };
  

  return (
    <div className="page">
      <ProfilePage user={user} />
    </div>
  );
}