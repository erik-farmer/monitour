# Monitour

### What data do we need to store (monitor attributes we care about)

* Adaptive Sync
* Brand
* Inputs
* Model
* Panel Type
* Price
* Refresh Rate
* Resolution
* Response time
* Size
* VESA mount


### Design

* Firebase backend to get started
* Flask/Angular dockerized on ecs with Nginx
* Login system w/Bcrypt
* CRUD up firebase with flask-restful
* Convert to postgres/aurora/aws free mysql


### Features
* Filter curated monitor list by the listed attributes above.
* (Future) Side by side comparison.