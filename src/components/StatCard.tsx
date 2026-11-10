interface StatCardProps {
    title: string;
    value: number;
    description: string;
    icon: string;
    color: string;
}

function StatCard({ title, value, description, icon, color }: StatCardProps) {
    return (
        <div className="stat-card">

            <div className="card-top">
                <p>{title}</p>
                <span className={`stat-icon ${color}`}>{icon}</span>
            </div>

            <h2>{value}</h2>

            <p>{description}</p>

        </div>
    );
}

export default StatCard;