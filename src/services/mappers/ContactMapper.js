class ContactMapper {
  toPersistence(domainContact) {
    return {
      id: domainContact.id,
      name: domainContact.name,
      email: domainContact.email.toLowerCase(),
      phone: domainContact.phone,
      category_id: domainContact.categoryId
    };
  };

  toDomain(persistenceContact) {
    return {
      id: persistenceContact.id,
      name: persistenceContact.name,
      email: persistenceContact.email,
      phone: persistenceContact.phone,
      categoryId: persistenceContact.category_id,
      categoryName: persistenceContact.category_name
    };
  };
}

export default new ContactMapper();