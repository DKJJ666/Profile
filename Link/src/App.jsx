import Profile from "./components/Profile"


export default function App(){
  return(
    <div className="app">
      <Profile
          avatar="https://i.pinimg.com/736x/61/09/34/610934de54cd1f09b0fe15eddca01f5e.jpg"
          name="Igor Augusto"
          bio="Back-End Developer"
          email="igor.acaraujo666@gmail.com"
          phone="11 95901-6880"
          githubUrl="https://github.com/DKJJ666"
          linkedinUrl=""
          instagramUrl="https://www.instagram.com/igor_llow/"
      >

      </Profile>
    </div>
  )
}