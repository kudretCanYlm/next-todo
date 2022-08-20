

export default function UserCard({ userName, imgUrl,className }) {

    return (
        <div className={`user-card ${className}`} >
            <p>{userName}</p>
            <img src={imgUrl} />
        </div>
    )
}