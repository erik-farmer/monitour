# Monitour

### What data do we need to store (monitor attributes we care about)

* Adaptive Sync
* Brand
* Model
* Panel Type
* Refresh Rate
* Resolution
* Response time
* Size


### Design

* Static JSON
* Flask/Angular dockerized on ecs with Nginx
* Login system w/Bcrypt
* Convert to postgres/aurora/aws free mysql


### Features
* Filter curated monitor list by the listed attributes above.
* (Future) Side by side comparison?

### GPU section TODOs:
* for each combo of 1080/1440 6080+ make a pick and 2-3 comparibles.
    * sites:
        * http://www.tomshardware.com/reviews/gpu-hierarchy,4388.html
        * http://www.ocaholic.ch/modules/smartsection/item.php?itemid=1633&page=3
        * http://www.pcworld.com/article/2883752/components-graphics/tested-nvidia-geforce-and-amd-radeon-graphics-cards-for-every-budget.html?page=3
        * http://www.anandtech.com/bench/GPU15/1248
        * http://www.hardwarecanucks.com/content/reviews/video_cards/
* List of benchmarks for other cards.
* Hierarchy source.
* Amazon Links