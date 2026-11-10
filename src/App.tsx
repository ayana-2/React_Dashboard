import Header from "./components/Header"
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import StatCard from "./components/StatCard";
import QuickActions from "./components/QuickActions";
import Footer from "./components/Footer";
import "./App.css";

const students = [
    {
        title: "Total Students",
        value: 5,
        description: "Registered students",
        icon: "♟️",
        color: "blue"
    },
    {
        title: "Active Students",
        value: 3,
        description: "60% of total",
        icon: "↗",
        color: "green"
    },
    {
        title: "Inactive Students",
        value: 2,
        description: "Need attention",
        icon: "♟️",
        color: "red"
    },
    {
        title: "Total Courses",
        value: 5,
        description: "Available courses",
        icon: "▣",
        color: "purple"
    }
];

const App = () => {
    return(
        <>
            <div className="app">

                <Header/>

                <main className="main">

                    <Navbar/>

                    <Welcome/>

                    <div className="stats">

                        {students.map((student, index) => (
                            <StatCard
                                key={index}
                                title={student.title}
                                value={student.value}
                                description={student.description}
                                icon={student.icon}
                                color={student.color}
                            />
                        ))}

                    </div>

                    <QuickActions/>

                </main>

                <Footer/>

            </div>
        </>
    )
}

export default App;