import React from 'react'
import communityImg1 from "../../assets/img/recent/recent-1.jpg";
import communityImg2 from "../../assets/img/recent/recent-2.jpg";
import communityImg3 from "../../assets/img/recent/recent-3.jpg";
import communityImg4 from "../../assets/img/recent/recent-4.jpg";
import communityImg5 from "../../assets/img/recent/recent-5.jpg";
import communityImg6 from "../../assets/img/recent/recent-6.jpg";
const communityPosts = [
  {
      id: 1,
      title: "Latest Updates",
      img: communityImg1,
      description: "Stay updated with the latest gaming news and events.",
      link: "#"
  },
  {
      id: 2,
      title: "Join a Clan",
      img: communityImg2,
      description: "Find and join clans that suit your gaming style.",
      link: "#"
  },
  {
      id: 3,
      title: "Upcoming Tournaments",
      img: communityImg3,
      description: "Participate in upcoming gaming tournaments and show your skills.",
      link: "#"
  },
  {
      id: 4,
      title: "Game Reviews",
      img: communityImg4,
      description: "Read reviews of the latest games from our community.",
      link: "#"
  },
  {
      id: 5,
      title: "Tips & Tricks",
      img: communityImg5,
      description: "Learn tips and tricks from seasoned gamers.",
      link: "#"
  },
  {
      id: 6,
      title: "Fan Art Gallery",
      img: communityImg6,
      description: "Showcase your fan art and get feedback.",
      link: "#"
  },
];

const index = () => {
  return (
    <div className='container-fluid'>
            <div className="community-container">
                <h1 className="text-center text-light mb-4">Gaming Community</h1>
                <div className="row justify-content-center">
                    {communityPosts.map(post => (
                        <div className="col-md-4 mb-4" key={post.id}>
                            <div className="card community-card">
                                <img src={post.img} className="card-img-top" alt={post.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.description}</p>
                                    <a href={post.link} className="btn btn-outline-light">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
);
}

export default index
