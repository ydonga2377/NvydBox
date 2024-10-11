import React from 'react'

const index = () => {
  return (
    <div>

<div class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__links">
                        <a href="./index.html"><i class="fa fa-home"></i> Home</a>
                        <span>Profile</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="profile-details spad">
        <div class="container">
            <div class="profile__details__content">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="profile__details__pic">
                            <img src="img/profile/profile-pic.jpg" alt="Profile Picture"/>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="profile__details__text">
                            <div class="profile__details__title">
                                <h3>John Doe</h3>
                                <span>Level 45 | Veteran Gamer</span>
                            </div>
                            <p>A passionate gamer with over 500+ games completed. Always up for a challenge and love to discuss strategies and achievements with fellow gamers.</p>
                            <div class="profile__details__stats">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <ul>
                                            <li><span>Games Owned:</span> 150</li>
                                            <li><span>Hours Played:</span> 1200 hrs</li>
                                            <li><span>Achievements Unlocked:</span> 320</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <ul>
                                            <li><span>Badges:</span> 25</li>
                                            <li><span>Friends:</span> 89</li>
                                            <li><span>Game Reviews:</span> 35</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <ul>
                                            <li><span>Favorite Game:</span> The Witcher 3</li>
                                            <li><span>Join Date:</span> March 2015</li>
                                            <li><span>Country:</span> USA</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="profile__details__actions">
                                <a href="#" class="site-btn follow-btn"><i class="fa fa-user-plus"></i> Follow</a>
                                <a href="#" class="site-btn chat-btn"><i class="fa fa-comments"></i> Message</a>
                                <a href="#" class="site-btn game-btn"><i class="fa fa-gamepad"></i> View Games</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h5>Achievements</h5>
                        </div>
                        <div class="achievements__list">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                    <div class="achievement__item">
                                        <img src="img/achievements/achievement-1.png" alt=""/>
                                        <h6>100% Completion</h6>
                                        <p>Complete 100 games</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                    <div class="achievement__item">
                                        <img src="img/achievements/achievement-2.png" alt=""/>
                                        <h6>Pro Player</h6>
                                        <p>Win 50 ranked matches</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                    <div class="achievement__item">
                                        <img src="img/achievements/achievement-3.png" alt=""/>
                                        <h6>Strategist</h6>
                                        <p>Complete 50 strategy games</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6">
                                    <div class="achievement__item">
                                        <img src="img/achievements/achievement-4.png" alt=""/>
                                        <h6>Master Explorer</h6>
                                        <p>Explore 100 open-world games</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  
            </div>
        </div>
    </section>    

    </div>
  )
}

export default index
