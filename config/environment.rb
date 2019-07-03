# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!


#reformat JBuilder
Jbuilder.key_format camelize: :lower