import random
# maps
MAPS = [
    'DFH Stadium',
    'Urban Central',
    'Beckwith Park',
    'Utopia Coliseum',
    'Mannfield',
    'Wasteland',
    'AquaDome',
    'Neo Tokyo',
    'Champions Field',
    'Farmstead',
    'Salty Shores',
    'Forbidden Temple',
    'Neon Fields', 
    'Deadeye Canyon',
    'Sovereign Heights'
]

# simple function that randomly picks a map from MAPS
def random_map(maps):
    map = maps[random.randint(0, len(maps)-1)]
    return map
