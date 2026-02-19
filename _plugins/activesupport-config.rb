# Silence Rails 8.1 deprecation warning for to_time timezone behavior
require 'active_support'
ActiveSupport.to_time_preserves_timezone = :zone
