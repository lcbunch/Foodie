json.array! @events do |event|
#can make stuff up
  # json.food 'taco'
  # json.name 'Jeremy'
  # json.creature 'kraken'
  # json.frizbee 4
  # json.zombies ['oo', 'ahh']
  json.id event.id
  json.title event.title
  json.allDay event.all_day
  json.start event.starts_at
  json.end event.ends_at
  json.url event.url
  json.color event.color
end
