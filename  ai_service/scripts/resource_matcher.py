# ai_service/scripts/resource_matcher.py

def match_resources(business_data: dict) -> list:
    """
    Recommends resources to support business growth based on industry and funding.

    Parameters:
        business_data (dict): Includes
            - business_type (str)
            - funding (float)
            - location (str)

    Returns:
        List[dict]: Recommended resources with name and type
    """
    business_type = business_data.get("business_type", "").lower()
    funding = float(business_data.get("funding", 0))
    location = business_data.get("location", "").lower()

    resources = []

    # General resources
    resources.extend([
        {"name": "Startup India", "type": "Government Support"},
        {"name": "Y Combinator Startup Library", "type": "Knowledge Base"},
        {"name": "LinkedIn Groups", "type": "Networking"},
    ])

    # Funding-specific
    if funding < 10000:
        resources.append({"name": "Micro VC Funds (e.g., 100x.VC, CIIE.CO)", "type": "Seed Funding"})
    elif funding <= 50000:
        resources.append({"name": "AngelList India", "type": "Angel Investment"})
        resources.append({"name": "Venture Catalysts", "type": "Mentorship + Funding"})
    else:
        resources.append({"name": "Accel Partners", "type": "Venture Capital"})
        resources.append({"name": "Sequoia Surge", "type": "Scale & Growth Accelerator"})

    # Domain-specific
    if "tech" in business_type:
        resources.append({"name": "Techstars", "type": "Tech Incubator"})
        resources.append({"name": "GitHub for Startups", "type": "Tools & Collaboration"})
    elif "retail" in business_type:
        resources.append({"name": "Retailers Association of India", "type": "Industry Group"})
        resources.append({"name": "Shopify Partners", "type": "E-Commerce Tools"})
    elif "education" in business_type:
        resources.append({"name": "Google for Education", "type": "Learning Platform"})
        resources.append({"name": "EdTech Review", "type": "Market Insights"})
    elif "health" in business_type:
        resources.append({"name": "HealthTech India", "type": "Startup Community"})
        resources.append({"name": "BIRAC (DBT)", "type": "Biotech Funding"})
    elif "finance" in business_type:
        resources.append({"name": "Fintech Meetup", "type": "Networking Platform"})
        resources.append({"name": "RBI Innovation Hub", "type": "Regulatory Guidance"})

    # Location-specific examples
    if "bangalore" in location or "bengaluru" in location:
        resources.append({"name": "NASSCOM 10,000 Startups (Bangalore Hub)", "type": "Incubator"})
    elif "mumbai" in location:
        resources.append({"name": "Zone Startups India", "type": "Accelerator"})
    elif "delhi" in location:
        resources.append({"name": "India Accelerator", "type": "Mentorship + Workspace"})

    return resources
