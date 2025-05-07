

const Footer = ({ coins }) => {
    console.log(coins[0].coin)
    return (
        <div>

            <footer class="mt-40 bg-black text-white p-10">

                <div className="w-20 mx-auto lg:w-30 mt-30">
                    <img src={coins[0].footer_logo} alt="" />
                </div>

                <div className=" mt-10 mb-10 grid grid-cols-2  gap-10 md:flex md:justify-between">
                    <nav className="w-30 lg:w-90 text-justify">
                        <h6 class="footer-title">About Us</h6>
                        <p>Welcome to Assemble My Ultimate Dream 11 Cricket Team – your personal fantasy cricket playground built around the pride of Bangladesh cricket!

                            We’re not just a website – we’re a tribute to Bangladesh’s finest cricketing talents. Our mission is simple: let fans like you create your dream XI using real stats, player insights, and a budget-friendly selection system. From seasoned stars to rising sensations, we give you full control to build, manage, and enjoy your ultimate cricket squad.</p>
                    </nav>
                    <nav className="w-30 lg:w-90 text-justify">
                        <h6 class="footer-title">Our Goal</h6>
                         <p>
                         To bring fans closer to the action by letting them experience team-building through the lens of data, strategy, and love for Bangladeshi cricket.

                        Let the game begin – build your dream team now and compete with passion!
                         </p>
                    </nav>
                    <fieldset class="w-80">
                    <h6 class="footer-title">Subscribe</h6>
                        <label>Subscribe to our newsletter for the latest updates.</label>
                        <div class="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                class="input input-bordered join-item" />
                            <button class="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </div>
                <div className="text-center font-black">
                    <small> <p>Copyright © {new Date().getFullYear()} - All right reserved by Bd Cricket</p></small>
                </div>
            </footer>
        </div>
    );
};

export default Footer;