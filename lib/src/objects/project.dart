import "dart:convert" show json;
import 'dart:html';
import "package:http/http.dart" as http;

class Project {
  final String name;
  final String description;
  final String imageUrl;
  final String codeUrl;
  final String demoUrl;

  bool get hasDemo => demoUrl.isNotEmpty;

  const Project(this.name, this.description, this.imageUrl, this.codeUrl, this.demoUrl);

  static Future<Project> github(
    String repoName, 
    {String name, 
    String imageUrl = "", 
    String demoUrl = ""}
  ) async {
    var codeUrl = "https://github.com/periodicaidan/$repoName";
    var githubApiUrl = "https://api.github.com/repos/periodicaidan/$repoName";
    Map<String, dynamic> repo = await http.get(githubApiUrl)
      .then((res) => json.decode(res.body));
    
    name = name ?? repoName;
    String description = repo["description"];

    return Project(name, description, imageUrl, codeUrl, demoUrl);
  }

  void openSourceCodeInNewTab() {
    window.open(codeUrl, "_blank");
  }
}