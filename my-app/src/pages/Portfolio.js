import library from '../Assets/liabrary.PNG'
import finance from '../Assets/essential_finance.PNG'
import workday from '../Assets/workdayschld.PNG'
import weather from '../Assets/Weather.PNG'

function Portfolio () {
    return (
        <div class="container">
            <h1 class="title">Portfolio</h1>
            <div class="row">
                <div class="col-6">

                    <a href="https://github.com/iliasc8/Weather-Application">
                        <h1> Weather Application </h1>
                    </a>

                    <div class="card ">
                        <a id="card1" target="_blank" href="https://github.com/iliasc8/Weather-Application">
                            <img src={weather} class="card-img-top" alt="Photo"></img>
                        </a>
                    </div>

                </div>
                <div class="col-6">
                    <a href="https://github.com/iliasc8/Work-Day-Scheduler">
                        <h1> Work-Day-Scheduler </h1>
                    </a>
                    <div class="card">
                        <a target="_blank" href="https://github.com/iliasc8/Work-Day-Scheduler"> 
                            <img src={workday} class="card-img-top" alt="Photo"></img>
                        </a>
                    </div>

                </div>
                <div class="col-6">
                    <a href="https://github.com/iliasc8/project1">
                        <h1>Essential Finance </h1>
                    </a>
                    <div class="card">
                        <a id="card2" target="_blank" href="https://github.com/iliasc8/project1"> 
                            <img src={finance} class="card-img-top pad" alt="Photo"></img>
                        </a>
                    </div>

                </div>
                <div class="col-6">
                    <a href="https://github.com/iliasc8/library-management-system">
                    <h1>Library-Management-System </h1>
                    </a>
                    <div class="card">
                        <a target="_blank" href="https://github.com/iliasc8/library-management-system"> 
                            <img src={library} class="card-img-top" alt="Photo"></img>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio;