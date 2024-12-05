require 'sinatra'
require 'rack/contrib'

use Rack::TryStatic,
    :urls => %w[/],
    :root => ".",
    :try => ['.html', 'index.html', '/index.html']

get "/" do
  "Hello, world!"
end
