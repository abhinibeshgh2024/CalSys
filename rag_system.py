# rag_system.py
# =====================================================================
# Vizag Cyber-Grid 0891: Smart City Local Offline Python RAG Engine
# =====================================================================
# This file provides a clean, 100% offline keyword/vector-overlap model
# matching framework for Visakhapatnam Smart City guidelines.
#
# No APIs or remote network requests are used or required!
# Run easily with: python rag_system.py

import re

# Offline Operational Knowledge Base for Visakhapatnam Cyber-Grid
KNOWLEDGE_BASE = [
  {
    "id": "kb-01",
    "category": "Metro & Rail Lines",
    "title": "Vizag Steel-Beach Maglev Corridor & Express Lines",
    "keywords": ["metro", "maglev", "rail", "express", "corridor", "station", "train", "speed", "kailasagiri", "steel plant"],
    "content": (
      "Visakhapatnam's primary transit spine is the Shanghai-styled driverless high-speed maglev corridor:\n"
      "• Steel-Beach Express (Red Line): Fast-tracks logistics from Vizag Steel Plant (VSP) in Gajuwaka straight to RK Beach Harbor Core. Cruising speeds reach 600 km/h via superconductive magnetic levitation.\n"
      "• Rushikonda Link (Blue Line): Connects Siripuram Junction directly to the Rushikonda IT Hill complex within a tight 4-minute travel window.\n"
      "• Coastal Scenic Line: Automated beachfront tourist shuttle utilizing clean induction tracks to generate and feed 24% regeneration power back into the grid."
    )
  },
  {
    "id": "kb-02",
    "category": "Bus Network",
    "title": "Vizag Electrified Bus Transit & Green Shuttles",
    "keywords": ["bus", "buses", "green shuttle", "electric bus", "route 102", "route 205", "recharge"],
    "content": (
      "Vizag's municipal bus system consists of 1,200 pure electric buses (EVs):\n"
      "• Route 102 (Dolphin Corridor): Loops heavy-traffic commuter paths from MVP Colony through Jagadamba junction to Yarada, running every 6 minutes.\n"
      "• Route 205 (IT Expressway): Feeds IT parks along the seaside. Integrates directly with Hangzhou-style priority sensors to preempt traffic congestion at intersections dynamically."
    )
  },
  {
    "id": "kb-03",
    "category": "Fares & Passes",
    "title": "Sovereign e-Rupee Transit Tariffs",
    "keywords": ["fare", "ticket", "card", "pass", "recharge", "balance", "erupee", "upi", "recharges"],
    "content": (
      "Vizag Cyber-Grid transit accepts standard Sovereign e-Rupee (Central Bank Digital Currency / UPI-CBDC):\n"
      "• Smart Card base fee: ₹100. Accounts bind directly with e-Rupee digital wallets for dual-offline transactions (NFC/wave payments work even inside tunnels).\n"
      "• Monthly Unlimited Pass: ₹1,200 grants unrestricted access to maglev lines and EV buses citywide.\n"
      "• Flat fares: Flat rates start at ₹10 e-Rupee base + ₹1.5 per kilometer of travel."
    )
  },
  {
    "id": "kb-04",
    "category": "Pneumatic Waste",
    "title": "Xiong'an-Style Under-Beach Pneumatic Trash Grid",
    "keywords": ["pneumatic", "trash", "waste", "garbage", "suction", "pipe", "vacuum", "slurry", "gajuwaka", "mvp colony"],
    "content": (
      "Modelled after Xiong'an technology, Gajuwaka and MVP Colony trash disposal is managed through sub-surface conduits:\n"
      "• Operational Flow: Multi-chamber inlet terminals separate compostables from high-grade plastics based on micro-tag scanning.\n"
      "• Subterranean Conduits: Heavy vacuum turbines accelerate solid waste slurry through 1.2-meter pipelines at 70 km/h straight to deep offshore processing units.\n"
      "• Purge Protocols: System triggers dynamic high-pressure sweeps to clear blockages automatically, ensuring 99.8% flow consistency."
    )
  },
  {
    "id": "kb-05",
    "category": "Environment",
    "title": "Vizag Coastal Telemetry & Air Quality (AQI)",
    "keywords": ["aqi", "air quality", "pollution", "telemetry", "co2", "environment", "carbon", "sea breeze"],
    "content": (
      "Vizag's unique sea-breeze circulation patterns are matched by grid telemetry sensors:\n"
      "• Goal: Keep average city AQI under 80. Current live coastal index is 52 (Excellent/Good) due to automated cargo vehicle regulation at the Port.\n"
      "• Carbon offsets: Heavy industrial zones are balanced by green carbon scores. Maintaining a high score unlocks digital rewards."
    )
  },
  {
    "id": "kb-06",
    "category": "Sovereign Rewards",
    "title": "Lunar Style Green Carbon Red Envelopes (Hongbao)",
    "keywords": ["hongbao", "envelope", "red envelope", "reward", "green score", "carbon score", "claim", "points"],
    "content": (
      "To incentivize eco-friendly micro-habits, citizens keeping high Green Score metrics are awarded digital Red Envelopes:\n"
      "• Criteria: Maintain a household Green Score above 80 points (earned by taking electric buses and sorting kitchen compost).\n"
      "• Rewards: Claims trigger direct e-Rupee red envelope (Hongbao) deposits ranging from ₹150 to ₹1,000 into citizen app ledger immediately."
    )
  },
  {
    "id": "kb-07",
    "category": "Emergency",
    "title": "Vizag Central Crisis Dispatch Lines",
    "keywords": ["emergency", "sos", "helpline", "hospital", "police", "fire", "911", "911-crit", "ambala"],
    "content": (
      "Vizag operates a unified emergency response grid with top-tier assets:\n"
      "• Direct Emergency Helpline: 911-CRIT (or instantly interact with the in-app Red SOS beacon).\n"
      "• Hospitals: Seven Hills Super Specialty (Sector 3, 500 emergency beds), Vizag General Trust Hospital (Sector 12, 1,200 beds), and Rushikonda Ocean Clinic (Sector 18).\n"
      "• Police: Beach Road Coastal Precinct, Gajuwaka Industrial Guard, and Siripuram HQ."
    )
  },
  {
    "id": "kb-08",
    "category": "City Overview",
    "title": "Vizag Cyber-Grid Overview & Port Logistics",
    "keywords": ["overview", "city", "vizag", "visakhapatnam", "port", "population", "mayor", "industrial"],
    "content": (
      "Welcome to Vizag Cyber-Grid Smart City! A futuristic Indian steel, naval, and tech capital of 2.4 million citizens.\n"
      "• Unified Node Management: Driven by automated high-speed transport corridors, deep pneumatic pipelines, and Hangzhou-style City Brain logistics.\n"
      "• Clean Energy Target: Currently harvesting 65% of all utility operations from regional wind and offshore solar platforms."
    )
  }
]

def clean_and_tokenize(text):
    """Normalize input text by removing symbols and converting to lower-case tokens."""
    normalized = re.sub(r'[^a-zA-Z0-9\s]', '', text.lower())
    return normalized.split()

def perform_local_rag_search(user_query: str):
    """
    Simulates Offline Retrieval-Augmented Generation for Vizag grounds.
    Matches queries by keywords and overlap tags.
    """
    user_query_clean = user_query.lower()
    query_tokens = clean_and_tokenize(user_query)
    
    scored_documents = []
    
    for doc in KNOWLEDGE_BASE:
        score = 0
        
        # 1. High-priority keyword triggers
        for kw in doc["keywords"]:
            if kw in user_query_clean:
                score += 5  # Keyword Match Weight
                
        # 2. Token overlap scoring
        for token in query_tokens:
            if len(token) > 3:  # Skip simple short stop-words
                content_normalized = doc["content"].lower()
                title_normalized = doc["title"].lower()
                
                if token in title_normalized:
                    score += 3
                elif token in content_normalized:
                    score += 1
                    
        if score > 0:
            scored_documents.append((doc, score))
            
    # Sort docs by highest match relevance
    scored_documents.sort(key=lambda item: item[1], reverse=True)
    
    if scored_documents:
        best_doc, score = scored_documents[0]
        results_str = f"\n[RAG SEARCH MATCH: {best_doc['category'].upper()} | ACCURACY SCORE: {score}]\n"
        results_str += f"Title: {best_doc['title']}\n"
        results_str += f"Guidelines:\n{best_doc['content']}\n"
        return results_str
        
    return (
        "\n[RAG SEARCH: No matching guideline found in Vizag Cyber-Grid manual.]\n"
        "Try querying around:\n"
        " - Maglev / Coastal Express corridor / Kailasagiri station\n"
        " - Electric Bus schedules (Route 102, Route 205)\n"
        " - Pneumatic guidelines (Gajuwaka vacuum trash, sub-surface conduits)\n"
        " - Sovereign Red envelopes or Green Score thresholds\n"
        " - Emergency helplines (911-CRIT, Seven Hills Hospital, Coastal guards)"
    )

def main():
    print("=" * 66)
    print("      VIZAG CYBER-GRID 0891: OFFLINE PYTHON RAG CONSOLE RUNNER     ")
    print("=" * 66)
    print("This local Python module runs completely offline with no APIs or keys required.\n")
    
    while True:
        try:
            user_input = input("Vizag Grid Query (or type 'exit' to quit): ")
            if user_input.strip().lower() in ["exit", "quit"]:
                print("Exiting RAG system operations console. Goodbye, Commander!")
                break
                
            if not user_input.strip():
                continue
                
            response = perform_local_rag_search(user_input)
            print("-" * 66)
            print(response)
            print("-" * 66 + "\n")
            
        except (KeyboardInterrupt, SystemExit):
            print("\nVizag Cyber-Grid RAG services suspended.")
            break

if __name__ == "__main__":
    main()
