# Learn HTML & CSS

## Setup instructions

* Installieren von RVM
* Installieren von Ruby ruby-2.0.0-p643 via rvm `rvm install ruby-2.0.0-p643`
* Installieren von Bundler
* Gems installieren via `bundle install`
* Guard und Livereload starten `bundle exec guard`
* Livereload Chrome Extension installieren https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
* Ordner im Editor öffnen (Sublime, oder Atom)

```
cd html-and-css/
rvm use ruby-2.0.0-p643
bundle install
bundle exec guard

# in a seperate terminal
cd html-and-css/
bundle exec ruby serve.rb

open http://localhost:8080/index.html
```
