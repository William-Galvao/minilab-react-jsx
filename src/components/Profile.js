import puppy from "../assets/images/puppy.jpg"

function Profile() {
    return (<div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={puppy} alt="puppy" />
        <div className="card-body">
            <h5 className="card-title">Cute Puppy</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget neque rutrum, volutpat felis ac, consectetur tellus. In hac habitasse platea dictumst. Maecenas sit amet luctus neque, sed blandit metus. Vestibulum sodales quis dui in pretium. Nunc posuere dignissim accumsan. Nam ac lectus a libero cursus vulputate eu commodo mauris. Fusce sagittis nulla sed justo rhoncus congue.</p>
        </div>
    </div>)
}

export default Profile;